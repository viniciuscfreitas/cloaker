const http = require('http');

// NOTE: Since we are running 'next build' and 'next start' or 'dev', we need the server running.
// This script assumes the server is running on localhost:3000

async function testScenario(name, headers, expectedStatus, expectedContentPart, path = '/') {
  console.log(`\n--- Testing: ${name} [Path: ${path}] ---`);
  try {
    const res = await fetch(`http://localhost:3000${path}`, {
      headers: headers,
      redirect: 'manual' // Don't follow redirects automatically
    });

    const text = await res.text();
    const status = res.status;

    // Check Status
    // Next.js middleware using NextResponse.redirect usually returns 307
    // Next.js middleware using NextResponse.rewrite returns 200 (preserving URL)

    let passStatus = false;
    if (expectedStatus === 'REDIRECT') {
      passStatus = (status === 307 || status === 308 || status === 302);
    } else {
      passStatus = (status === expectedStatus);
    }

    // Check Content (only if not redirect, or strict check)
    let passContent = true;
    if (expectedContentPart && status === 200) {
      passContent = text.includes(expectedContentPart);
    }

    console.log(`Status: ${status} [Expected: ${expectedStatus}]`);
    if (status === 200) console.log(`Content Snippet: ${text.substring(0, 50).replace(/\n/g, ' ')}...`);

    if (passStatus && passContent) {
      console.log('✅ PASS');
    } else {
      console.log('❌ FAIL');
      console.log('Headers Sent:', headers);
    }

  } catch (e) {
    console.log(`❌ ERROR: Connection failed. Is server running?`, e.message);
  }
}

async function runTests() {
  // 1. Bot User-Agent (Facebook)
  await testScenario(
    'Bot Check (Facebook UA)',
    { 'User-Agent': 'facebookexternalhit/1.1' },
    200,
    'NomadLife'
  );

  // 2. US Location (Blocked Geo)
  await testScenario(
    'Geo Check (US IP)',
    {
      'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36',
      'x-vercel-ip-country': 'US'
    },
    200,
    'NomadLife'
  );

  // 3. Valid Lead (BR + pt + UTM Signal)
  await testScenario(
    'Valid Lead (BR + pt + UTM)',
    {
      'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36',
      'x-vercel-ip-country': 'BR',
      'Accept-Language': 'pt-BR,pt;q=0.9,en-US;q=0.8,en;q=0.7'
    },
    'REDIRECT',
    null,
    '/?u=fb' // Adding UTM signal
  );

  // 4. Valid Lead (DE + de + UTM Signal)
  await testScenario(
    'Valid Lead (DE + de + UTM)',
    {
      'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36',
      'x-vercel-ip-country': 'DE',
      'Accept-Language': 'de-DE,de;q=0.9,en-US;q=0.8,en;q=0.7'
    },
    'REDIRECT',
    null,
    '/?u=fb' // Adding UTM signal
  );

  // 4. Suspicious Lead (DE + zh only - Consistency Check)
  await testScenario(
    'Consistency Check (DE + zh only)',
    {
      'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36',
      'x-vercel-ip-country': 'DE',
      'Accept-Language': 'zh-CN,zh;q=0.9'
    },
    200, // Should be Safe Page
    'NomadLife',
    '/?u=fb'
  );

  // 5. Lead without UTM and without Referer (Blocked)
  await testScenario(
    'Lead without Signal (No UTM/No Ref)',
    {
      'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36',
      'x-vercel-ip-country': 'DE',
      'Accept-Language': 'de-DE'
    },
    200,
    'NomadLife'
  );

  // 5. Bot on random path (Rewrite check)
  await testScenario(
    'Bot on Random Path (Rewrite check)',
    {
      'User-Agent': 'Googlebot/2.1',
    },
    200, // Should show content of root page despite URL
    'NomadLife',
    '/suspicious-path-123'
  );
}

runTests();
