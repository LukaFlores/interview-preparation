
#!/bin/sh

set -xe

if [ -z $1 ]; then
	echo Add a filename to command: ./build.sh filename

	else
    ts-node 3-longest-substring-without-repeating-characters.ts

    time ( ts-node 3-longest-substring-without-repeating-characters.ts) >&1 1>/dev/null 


fi
         
