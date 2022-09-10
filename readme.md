
Build Docker image: docker build -t devopsbackend .
Run Docker image in interactive mode: docker run -it -p 3009:3006 devopsbackend
Run Docker image in detached mode: docker run -d -p 3009:3006 devopsbackend

Specifying volume flag to effect changes in real time

 docker run -it -p 3008:3006 -v $(pwd):/devopsBackend mydevopsbackend