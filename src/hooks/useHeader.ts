import { useState } from "react";


export function useHeader(){
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
    
    return{isMobileMenuOpen, setIsMobileMenuOpen}
}
