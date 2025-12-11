@echo off
echo Starting Python Backend Server...
cd backend
echo Installing dependencies...
py -m pip install -r requirements.txt
echo.
echo Starting Flask server...
py app.py
pause

