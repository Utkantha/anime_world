@echo off
setlocal
echo Starting React Frontend...
rem Ensure we run from the script's directory
pushd "%~dp0frontend"
echo Installing dependencies (first time only)...
npm install
echo Starting dev server...
npm start
popd
pause
endlocal
