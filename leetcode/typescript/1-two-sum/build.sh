
#!/bin/sh

set -xe

if [ -z $1 ]; then
	echo Add a filename to command: ./build.sh filename

	else

    ts-node 1-two-sum.ts

    $(time ( ts-node 1-two-sum.ts) >&1 1>/dev/null )


fi
         
