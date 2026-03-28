@echo off
set NODE="C:\Program Files\nodejs\node.exe"
if not exist %NODE% set NODE=node
%NODE% "%~dp0scripts\make-movies-data.mjs"
echo Exit code: %ERRORLEVEL%
pause
