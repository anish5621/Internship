import type { Song } from "../data/songs";

interface PlayerProps {
    currentSong: Song;
    isPlaying: boolean;
    currentTime: number;
    duration: number;
    audioRef: React.RefObject<HTMLAudioElement | null>;
    onPlay: () => void;
    onPause: () => void;
    onSeek: (time: number) => void;
    onLoadedMetadata: (e: React.SyntheticEvent<HTMLAudioElement>) => void;
    onTimeUpdate: (e: React.SyntheticEvent<HTMLAudioElement>) => void;
    formatTime: (seconds: number) => string;
}

export function Player({
    currentSong,
    isPlaying,
    currentTime,
    duration,
    audioRef,
    onPlay,
    onPause,
    onSeek,
    onLoadedMetadata,
    onTimeUpdate,
    formatTime,
}: PlayerProps) {
    return (
        <div className="player">
            <h2>{currentSong.title}</h2>
            <p>{currentSong.artist}</p>

            <audio
                ref={audioRef}
                src={currentSong.url}
                onLoadedMetadata={onLoadedMetadata}
                onTimeUpdate={onTimeUpdate}
            />

            {!isPlaying ? (
                <button onClick={onPlay}>▶ Play</button>
            ) : (
                <button onClick={onPause}>⏸ Pause</button>
            )}

            <input
                type="range"
                min="0"
                max={duration}
                value={currentTime}
                onChange={(e) => onSeek(Number(e.target.value))}
            />

            <div className="time">
                <span>{formatTime(currentTime)}</span>
                <span>{formatTime(duration)}</span>
            </div>
        </div>
    );
}