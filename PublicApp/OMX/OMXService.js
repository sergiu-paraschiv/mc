import OMXPlayer from 'omxplayer';

class OMXService {
    constructor() {
        this.player = new OMXPlayer();
    }

    start(path) {
        this.player.start(path, (error, id) => {
            if(error) {
                console.error(error);
            }
            else {
                console.info('started id', id);

                this.player.on('prop:position', (pos) => {
                    console.log('p', pos);
                });
            }
        });
    }

    stop() {
        this.player.stop();
    }
}

export default new OMXService();
