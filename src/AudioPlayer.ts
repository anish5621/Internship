import { useState, useRef, useCallback, useEffect } from "react";
import type { Song } from "./data/songs";

export function useAudioPlayer() {
    const [currentSong, setCurrentSong] = useState<Song | null>(null);
    const [isPlaying, setIsPlaying] = useState(false);
    const [currentTime, setCurrentTime] = useState(0);
    const [duration, setDuration] = useState(0);

    const audioRef = useRef<HTMLAudioElement>(null);

    useEffect(() => {
        if (currentSong && audioRef.current) {
            audioRef.current.play();
            setIsPlaying(true);
        }
    }, [currentSong]);

    const handleSelectSong = useCallback((song: Song) => {
        setCurrentSong(song);
        setCurrentTime(0);
        setDuration(0);
    }, []);

    const handlePlay = useCallback(() => {
        audioRef.current?.play();
        setIsPlaying(true);
    }, []);

    const handlePause = useCallback(() => {
        audioRef.current?.pause();
        setIsPlaying(false);
    }, []);

    const handleSeek = useCallback((newTime: number) => {
        if (audioRef.current) {
            audioRef.current.currentTime = newTime;
        }
        setCurrentTime(newTime);
    }, []);

    const handleLoadedMetadata = useCallback((e: React.SyntheticEvent<HTMLAudioElement>) => {
        setDuration(e.currentTarget.duration);
    }, []);

    const handleTimeUpdate = useCallback((e: React.SyntheticEvent<HTMLAudioElement>) => {
        setCurrentTime(e.currentTarget.currentTime);
    }, []);

    return {
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
    };
}