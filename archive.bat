@echo off
:: archive.bat — đóng gói dist/ thành dist.tar.gz (Windows)
:: Dùng: archive.bat [đường-dẫn-dist]
:: Ví dụ: archive.bat ..\VGM-DANTOC\dist

setlocal

set "DIST_PATH=%~1"
if "%DIST_PATH%"=="" set "DIST_PATH=dist"

if not exist "%DIST_PATH%\" (
    echo ERROR: Thu muc '%DIST_PATH%' khong ton tai
    echo Dung: archive.bat ^<duong-dan-den-dist^>
    exit /b 1
)

echo Dong goi '%DIST_PATH%' -^> dist.tar.gz ...
tar -czf dist.tar.gz -C "%DIST_PATH%\.." "%~nx1"
if %errorlevel% neq 0 (
    echo ERROR: tar that bai. Kiem tra Windows 10+ co san tar.
    exit /b 1
)

echo Xong! dist.tar.gz da duoc tao.
endlocal
