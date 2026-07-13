import React, { useState, useEffect, useRef } from 'react';
import { Search, MapPin } from 'lucide-react';
import { MUMBAI_AREAS } from '../utils/mumbaiAreas';

export const LocationSearch = ({ 
  name = "location", 
  value = "", 
  onChange, 
  required = false,
  placeholder = "Select your area in Mumbai",
  className = ""
}) => {
  const [isOpen, setIsOpen] = useState(false);
  const [searchTerm, setSearchTerm] = useState(value);
  const wrapperRef = useRef(null);

  useEffect(() => {
    setSearchTerm(value);
  }, [value]);

  useEffect(() => {
    function handleClickOutside(event) {
      if (wrapperRef.current && !wrapperRef.current.contains(event.target)) {
        setIsOpen(false);
      }
    }
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  const filteredAreas = MUMBAI_AREAS.filter(area => 
    area.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const handleSelect = (area) => {
    setSearchTerm(area);
    setIsOpen(false);
    if (onChange) {
      onChange({ target: { name, value: area } });
    }
  };

  const handleInputChange = (e) => {
    const val = e.target.value;
    setSearchTerm(val);
    setIsOpen(true);
    if (onChange && val === "") {
      onChange({ target: { name, value: "" } });
    }
  };

  // If the component requires a value (required attribute) and it's not a valid selection yet,
  // we can use a hidden actual input to enforce HTML5 validation.
  return (
    <div ref={wrapperRef} className="relative w-full">
      <div className="relative">
        <input
          type="text"
          value={searchTerm}
          onChange={handleInputChange}
          onFocus={() => setIsOpen(true)}
          placeholder={placeholder}
          autoComplete="off"
          className={`${className} pr-10`}
        />
        {/* Hidden input to handle actual form submission state and required attribute properly */}
        <input 
          type="hidden" 
          name={name} 
          value={value} 
          required={required} 
        />
        <div className="absolute right-3 top-1/2 -translate-y-1/2 text-slate-400 pointer-events-none">
          <Search className="w-4 h-4" />
        </div>
      </div>

      {isOpen && (
        <div className="absolute z-50 w-full mt-1 bg-white dark:bg-[#1e293b] border border-slate-200 dark:border-white/10 rounded-xl shadow-xl max-h-60 overflow-y-auto overflow-x-hidden">
          {filteredAreas.length > 0 ? (
            <ul className="py-1">
              {filteredAreas.map((area, index) => (
                <li 
                  key={index}
                  onClick={() => handleSelect(area)}
                  className="px-4 py-2.5 text-sm text-slate-700 dark:text-slate-200 hover:bg-slate-100 dark:hover:bg-slate-800 cursor-pointer flex items-center gap-2 transition-colors"
                >
                  <MapPin className="w-4 h-4 text-brand-gold shrink-0" />
                  {area}
                </li>
              ))}
            </ul>
          ) : (
            <div className="px-4 py-3 text-sm text-slate-500 dark:text-slate-400 text-center">
              No areas found matching "{searchTerm}"
            </div>
          )}
        </div>
      )}
    </div>
  );
};
