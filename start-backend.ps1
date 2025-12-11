Write-Host "Starting Python Backend Server..." -ForegroundColor Cyan
Set-Location backend
Write-Host "Installing dependencies..." -ForegroundColor Yellow
py -m pip install -r requirements.txt
Write-Host ""
Write-Host "Starting Flask server..." -ForegroundColor Green
py app.py

