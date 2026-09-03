import { useState, useMemo } from "react";
import SongList from "./components/SongList";
import { massiveSongs } from "./data/songs";
import { useAudioPlayer } from "./AudioPlayer";
import "./App.css";

const formatTime = (seconds: number) => {
    if (!seconds || isNaN(seconds)) return "0:00";
    const mins = Math.floor(seconds / 60);
    const secs = Math.floor(seconds % 60);
    return `${mins}:${secs.toString().padStart(2, "0")}`;
};

export default function App() {
    const [search, setSearch] = useState("");

    const {
        currentSong,
        isPlaying,
        currentTime,
        duration,
        audioRef,
        handleSelectSong,
        handlePlay,
        handlePause,
        handleSeek,
        handleLoadedMetadata,
        handleTimeUpdate,
    } = useAudioPlayer();

    const filteredSongs = useMemo(() => {
        const query = search.toLowerCase();
        return massiveSongs.filter(
            (s) =>
                s.title.toLowerCase().includes(query) ||
                s.artist.toLowerCase().includes(query)
        );
    }, [search])

    return (
        <div className="app">
            <h1>🎵 Audio Player</h1>

            <input
                type="text"
                className="search-input"
                placeholder="Search songs..."
                value={search}
                onChange={(e) => setSearch(e.target.value)}
            />

            {currentSong && (
                <audio
                    ref={audioRef}
                    src={currentSong.url}
                    onLoadedMetadata={handleLoadedMetadata}
                    onTimeUpdate={handleTimeUpdate}
                />
            )}

            <SongList
                songs={filteredSongs}
                currentSong={currentSong}
                isPlaying={isPlaying}
                currentTime={currentTime}
                duration={duration}
                onSelectSong={handleSelectSong}
                onPlay={handlePlay}
                onPause={handlePause}
                onSeek={handleSeek}
                formatTime={formatTime}
            />
        </div>
    );
}