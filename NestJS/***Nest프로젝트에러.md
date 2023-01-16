# Nest new

Nest new 명령어를 이용하여 Nest프로젝트를 만들던중 node_modules폴더가 만들어지지 않은 에러가 생겼다. 아무리 찾아봐도 에러를 찾지못했다. 

*npm install도 되지 않는 상황*

    ▹▹▹▸▹ Installation in progress... ☕
    Failed to execute command: yarn install --silent
    ✖ Installation in progress... ☕
    🙀  Packages installation failed!
    In case you don't see any errors above, consider manually running the failed command yarn install to see more details on why it errored out.

이런 에러가 발생했다. 

버전바꾸고 별걸다 해봤다.

해결되는건 없었고 , 설마설마 네트워크 문제는 아니겠지... 생각했는데 

Nest프로젝트를 만드는 시점이 공용네트워크를 사용하고 있었다. 

집에와서 집 와이파이를 연결해보니 node_modules폴더가 만들어지고 npm install이 정상작동됬다.

