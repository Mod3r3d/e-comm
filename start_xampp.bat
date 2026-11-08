@echo off
title WOODLUXE - XAMPP Runner
echo ============================================================
echo      WOODLUXE INTERNATIONAL LIVING - XAMPP LAUNCHER
echo ============================================================
echo [1/3] Khoi dong may chu Apache...
start /B "" "C:\xampp\apache\bin\httpd.exe"

echo [2/3] Khoi dong co so du lieu MySQL (MariaDB)...
start /B "" "C:\xampp\mysql\bin\mysqld.exe" --defaults-file="C:\xampp\mysql\bin\my.ini" --standalone

timeout /t 2 /nobreak >nul
echo [3/3] He thong da san sang tren XAMPP!
echo.
echo   * Website chinh (Storefront): http://localhost/e-comm/
echo   * He thong WooCommerce:        http://localhost/kiotviet-web/
echo   * Quan tri WordPress:          http://localhost/kiotviet-web/wp-admin/
echo   * Quan tri Database:           http://localhost/phpmyadmin/
echo.
echo Dang mo trinh duyet...
start http://localhost/e-comm/
echo ============================================================
