@echo off

set ORIGDIR="%CD%"

set MINICONDAPATH=%USERPROFILE%\Miniconda3
set CONDAEXE=%TEMP%\%RANDOM%-%RANDOM%-%RANDOM%-%RANDOM%-condainstall.exe
set "OS="
set "MCLINK="
set MACROCOSMPATH=%USERPROFILE%\models\v2-1_768-ema-pruned.ckpt
set CKPTPATH=https://huggingface.co/stabilityai/stable-diffusion-2-1/blob/main/v2-1_768-ema-pruned.ckpt
where conda >nul 2>nul
if %ERRORLEVEL% EQU 0 goto CONDAFOUND

:INSTALLCONDA
reg Query "HKLM\Hardware\Description\System\CentralProcessor\0" | find /i "x86" > NUL && set OS=32BIT || set OS=64BIT
if %OS%==32BIT set MCLINK=https://repo.anaconda.com/miniconda/Miniconda3-latest-Windows-x86.exe
if %OS%==64BIT set MCLINK=https://repo.anaconda.com/miniconda/Miniconda3-latest-Windows-x86_64.exe

echo Downloading Miniconda3 (This will take while, please wait)...
powershell -Command "(New-Object Net.WebClient).DownloadFile('%MCLINK%', '%CONDAEXE%')" >nul 2>nul
if errorlevel 1 goto CONDAERROR

echo Installing Miniconda3 (This will also take a while, please wait)...
start /wait /min "Installing Miniconda3..." "%CONDAEXE%" /InstallationType=JustMe /S /D="%MINICONDAPATH%"
del "%CONDAEXE%"
if not exist "%MINICONDAPATH%\" goto CONDAERROR

"%MINICONDAPATH%\Scripts\conda.exe" init
if errorlevel 1 goto CONDAERROR

echo Miniconda3 has been installed!
goto END

:CONDAERROR
echo Miniconda3 install failed!
exit /B 1

:CONDAFOUND
echo Conda is already installed!
goto END

:END
"%MINICONDAPATH%\Scripts\conda.exe" env create -f environment.yaml
"%MINICONDAPATH%\Scripts\conda.exe" activate ldm
"%MINICONDAPATH%\Scripts\pip.exe" install -r requirements.txt --no-warn-script-location
exit /B 0