"use client";

import API from "@/api";
import { useEffect } from "react";

const VisitorTracker = () => {
    useEffect(() => {
        const trackVisitor = async () => {
            try {
                await API.visitor.trackVisitor();
            } catch (error) {
                console.error("Error tracking visitor:", error);
            }
        };

        trackVisitor();
    }, []);

    return null;
};

export default VisitorTracker;
