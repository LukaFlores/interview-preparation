
#!/bin/sh

set -xe

if [ -z $1 ]; then
	echo Add a filename to command: ./build.sh filename

	else
    ts-node 26-remove-duplicates-from-sorted-array.ts

    time ( ts-node 26-remove-duplicates-from-sorted-array.ts) >&1 1>/dev/null 


fi
         
