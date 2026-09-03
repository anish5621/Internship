export interface Song {
    id: number;
    title: string;
    artist: string;
    duration: number;
    url: string;
}

export const massiveSongs: Song[] = Array.from(
    { length: 1000 },
    (_, index) => ({
        id: index + 1,
        title: `Song ${index + 1}`,
        artist: `Artist ${index + 1}`,
        duration: 200,
        url: "https://www.soundhelix.com/examples/mp3/SoundHelix-Song-1.mp3"
    })
);