@echo off
REM Quick Start Guide for Mentorship Portal - Institution Module
REM Run this script to set up and start the entire project

echo.
echo ========================================
echo  Mentorship Portal - Institution Module
echo ========================================
echo.

setlocal enabledelayedexpansion

REM Check if MongoDB is running
echo [1/5] Checking MongoDB...
echo.
timeout /t 2 /nobreak

REM Install Python dependencies
echo [2/5] Installing Python dependencies...
echo.
cd scraper
pip install -r requirements.txt
echo.
cd ..

REM Run the scraper
echo [3/5] Running IIT Bombay scraper...
echo.
cd scraper
python -m scrapers.iitb_scraper
echo.
cd ..

REM Start backend server
echo [4/5] Starting Node.js backend server...
echo.
start cmd /k "cd server && npm run dev"
timeout /t 3 /nobreak

REM Start frontend
echo [5/5] Starting React frontend...
echo.
start cmd /k "cd client && npm run dev"

echo.
echo ========================================
echo  All services started!
echo ========================================
echo.
echo Backend:  http://localhost:5000
echo Frontend: http://localhost:5173
echo.
echo Press CTRL+C to stop any service
echo.
pause
