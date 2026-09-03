import { memo } from "react";
import type { Song } from "../data/songs";

interface SongItemProps {
    song: Song;
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

function SongItem({
    song,
    currentSong,
    isPlaying,
    currentTime,
    duration,
    onSelectSong,
    onPlay,
    onPause,
    onSeek,
    formatTime,
}: SongItemProps) {
    const isSelected = currentSong?.id === song.id;

    const handleButtonClick = (e: React.MouseEvent) => {
        e.stopPropagation();
        if (!isSelected) {
            onSelectSong(song);
        } else if (isPlaying) {
            onPause();
        } else {
            onPlay();
        }
    };

    return (
        <div
            className={`song-item ${isSelected ? "selected" : ""}`}
            onClick={() => onSelectSong(song)}
        >
            <div className="song-header">
                <h3>{song.title}</h3>
                <p>{song.artist}</p>
            </div>

            <button className="item-play-btn" onClick={handleButtonClick}>
                {isSelected && isPlaying ? "Pause" : "Play"}
            </button>

            {isSelected && (
                <div className="item-controls" onClick={(e) => e.stopPropagation()}>
                    <input
                        type="range"
                        min="0"
                        max={duration || 0}
                        value={currentTime}
                        onInput={(e) => onSeek(Number((e.target as HTMLInputElement).value))}
                        onChange={(e) => onSeek(Number(e.target.value))}
                    />
                    <div className="time">
                        <span>{formatTime(currentTime)}</span>
                        <span>{formatTime(duration)}</span>
                    </div>
                </div>
            )}
        </div>
    );
}

export default memo(SongItem);