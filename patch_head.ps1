$content = Get-Content -Path index.html -Raw
$newTags = @"
    <link rel="canonical" href="https://base-goto.com/">
    
    <!-- OGP Tags -->
    <meta property="og:title" content="MassBASE & SubBASE | 五島市のマンスリーアパートメント">
    <meta property="og:description" content="長崎県五島市福江の家具家電付きマンスリーアパートメント。敷金0礼金0、出張・ビジネス滞在に最適。">
    <meta property="og:type" content="website">
    <meta property="og:url" content="https://base-goto.com/">
    <meta property="og:image" content="https://base-goto.com/assets/images/subbase_exterior_lawn.jpg">
    <meta property="og:site_name" content="MassBASE & SubBASE">
    <meta name="twitter:card" content="summary_large_image">

    <!-- Structured Data (JSON-LD) -->
    <script type="application/ld+json">
    {
      "@context": "https://schema.org",
      "@type": "LodgingBusiness",
      "name": "MassBASE & SubBASE",
      "image": "https://base-goto.com/assets/images/subbase_exterior_lawn.jpg",
      "url": "https://base-goto.com/",
      "telephone": "070-4021-4835",
      "address": {
        "@type": "PostalAddress",
        "addressLocality": "五島市",
        "addressRegion": "長崎県",
        "addressCountry": "JP"
      },
      "description": "長崎県五島市福江のマンスリーアパートメント。家具家電・Wi-Fi完備で出張や工事滞在に最適です。"
    }
    </script>
    
    <!-- Google Fonts -->
"@
$content = $content -replace '<!-- Google Fonts -->', $newTags
Set-Content -Path index.html -Value $content -Encoding UTF8
