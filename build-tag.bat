@echo off

REM Set variables for image names
set IMAGE_NAME="images.bautistahome.com/itsageba/personal-website"

REM Read version from .env file
for /f "tokens=2 delims==" %%a in ('findstr "DOCKER_IMAGE_VERSION" .env') do set VERSION=%%a

REM Ask user if the current version is correct
set /p "answer=Is version %VERSION% correct? [Y/n] "
set "answer=%answer:~,1%"

REM Convert answer to lowercase
if /i "%answer%"=="n" (
    REM Prompt user to enter the correct version
    set /p "VERSION=Enter the correct version: "
)

REM Build Docker image with version tag
docker build -t %IMAGE_NAME%:%VERSION% .

set /p "answer=Set tag: %VERSION% as latest? [y/N] "
set "answer=%answer:~,1%"

if /i "%answer%"=="y" (
    REM Tag the image as latest
    docker tag %IMAGE_NAME%:%VERSION% %IMAGE_NAME%:latest
)

REM Ask user if they wany to push the image into the registry
set /p "answer=Would you like to push %IMAGE_NAME%:%VERSION% to the registry? [y/N] "
set "answer=%answer:~,1%"

if /i "%answer%"=="y" (
	docker image push %IMAGE_NAME%:%VERSION%
)