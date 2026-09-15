$content = Get-Content -Path index.html -Raw
$content = $content -replace '<img src="assets/images/IMG_4410.webp" alt="Interior Details" class="img-stagger-1">', '<img src="assets/images/IMG_4410.webp" alt="Interior Details" class="img-stagger-1" loading="lazy">'
$content = $content -replace '<img src="assets/images/1685862963200.webp" alt="Room Atmosphere" class="img-stagger-2">', '<img src="assets/images/1685862963200.webp" alt="Room Atmosphere" class="img-stagger-2" loading="lazy">'
$content = $content -replace '<img src="assets/images/basegoto_logo.webp" alt="BASE GOTO" class="footer-logo">', '<img src="assets/images/basegoto_logo.webp" alt="BASE GOTO" class="footer-logo" loading="lazy">'
Set-Content -Path index.html -Value $content -Encoding UTF8
