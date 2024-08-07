'use client'
import { useErrorBoundary } from "react-error-boundary"
import styles from "./error.module.css";

export default function DefaultError({error}: {
    error: any    
}) {
    
    
    return (
        <div className={`${styles['error-container']}`}>
            <h2>{error.message}</h2>            
        </div>
    )
}