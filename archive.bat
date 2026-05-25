@echo off
REM =======================================================
REM Usage:
REM archive.bat C:\path\to\dist
REM
REM This will create an archive named dist.tar.gz
REM in the current working directory.
REM =======================================================

REM Check if argument is provided
IF "%~1"=="" (
    echo Error: No path provided.
    echo Usage: %~nx0 C:\path\to\dist
    exit /b 1
)

REM Save input path
set INPUT_PATH=%~1

REM Check if directory exists
IF NOT EXIST "%INPUT_PATH%" (
    echo Error: Directory "%INPUT_PATH%" does not exist.
    exit /b 1
)

REM Get base directory name (dist)
for %%I in ("%INPUT_PATH%") do set DIR_NAME=%%~nxI

REM Get parent directory
for %%I in ("%INPUT_PATH%\..") do set PARENT_DIR=%%~fI

REM Output file name
set OUTPUT_FILE=%DIR_NAME%.tar.gz

REM Create tar.gz archive
tar -czf "%OUTPUT_FILE%" -C "%PARENT_DIR%" "%DIR_NAME%"

echo Archive created: %OUTPUT_FILE%
