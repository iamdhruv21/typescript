interface takephoto {
    cameraMode: string
    readonly burst: number
}

interface story {
    createStory():void
}

class Instagram implements takephoto, story {
    constructor(
        public cameraMode: string,
        public burst: number,
        private filter: string
    ){}

    createStory(): void {
        console.log("hi")
    }
}