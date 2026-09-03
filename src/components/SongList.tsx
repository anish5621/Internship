import type { Song } from "../data/songs";
import SongItem from "./SongItem";

interface SongListProps {
    songs: Song[];
    currentSong: Song | null;
    isPlaying: boolean;
    currentTime: number;
    duration: number;
    onSelectSong: (song: Song) => void;
    onPlay: () => void;
    onPause: () => void;
    onSeek: (time: number) => void;
    formatTime: (seconds: number) => string;
}

export default function SongList({
    songs,
    currentSong,
    isPlaying,
    currentTime,
    duration,
    onSelectSong,
    onPlay,
    onPause,
    onSeek,
    formatTime,
}: SongListProps) {
    return (
        <div className="song-list">
            {songs.map((song) => (
                <SongItem
                    key={song.id}
                    song={song}
                    currentSong={currentSong}
                    isPlaying={isPlaying}
                    currentTime={currentTime}
                    duration={duration}
                    onSelectSong={onSelectSong}
                    onPlay={onPlay}
                    onPause={onPause}
                    onSeek={onSeek}
                    formatTime={formatTime}
                />
            ))}
        </div>
    );
}