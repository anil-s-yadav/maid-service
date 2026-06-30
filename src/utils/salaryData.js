// ============================================
// Salary Calculator Logic & Data
// ============================================

import { SERVICES, HOURS_MULTIPLIER, EXPERIENCE_LEVELS, EDUCATION_LEVELS, LANGUAGES } from './constants';

/**
 * Calculates the estimated monthly salary for domestic help
 * @param {Object} options
 * @param {string} options.serviceId - e.g., 'house-maid', 'cook'
 * @param {string} options.hours - '4', '6', '8', '10', '12', '24'
 * @param {string} options.experience - '0-2', '2-5', '5-10', '10+'
 * @param {string} options.education - 'below-10th', '10th', '12th', 'graduate'
 * @param {Array<string>} options.languages - ['hindi', 'english']
 * @returns {Object} { min, max, average, breakdown }
 */
export function calculateSalaryEstimate({ serviceId, hours, experience, education, languages = [] }) {
  // 1. Get Base Rate for the service (represents 12 hours)
  const service = SERVICES.find(s => s.id === serviceId) || SERVICES[0];
  let baseRate = service.baseRate; // Default to 12-hour rate

  // 2. Apply Hours Multiplier
  const hourMultiplier = HOURS_MULTIPLIER[hours] || 1;
  let adjustedRate = baseRate * hourMultiplier;

  // 3. Apply Experience Factor
  const expLevel = EXPERIENCE_LEVELS.find(e => e.value === experience) || EXPERIENCE_LEVELS[0];
  let expAdjustedRate = adjustedRate * expLevel.factor;

  // 4. Apply Education Factor
  const eduLevel = EDUCATION_LEVELS.find(e => e.value === education) || EDUCATION_LEVELS[0];
  let eduAdjustedRate = expAdjustedRate * eduLevel.factor;

  // 5. Apply Language Premium (Only English adds premium)
  let langMultiplier = 1.0;
  if (languages.includes('english')) {
    const engLang = LANGUAGES.find(l => l.value === 'english');
    langMultiplier = engLang.factor;
  }
  let finalCalculatedRate = eduAdjustedRate * langMultiplier;
  
  // Market average logic (to show savings/value)
  // Usually agencies charge 15-20% margin, we calculate the rough market rate
  const marketAverageRate = finalCalculatedRate * 1.18; 

  // Round to nearest 500
  const roundToNearest = (num, nearest) => Math.round(num / nearest) * nearest;
  
  const estimatedAverage = roundToNearest(finalCalculatedRate, 500);
  
  // Provide a range (+/- 10%)
  const min = roundToNearest(estimatedAverage * 0.9, 500);
  const max = roundToNearest(estimatedAverage * 1.1, 500);

  return {
    min,
    max,
    average: estimatedAverage,
    marketAverage: roundToNearest(marketAverageRate, 500),
    breakdown: {
      base: roundToNearest(adjustedRate, 500),
      experiencePremium: roundToNearest(expAdjustedRate - adjustedRate, 500),
      educationPremium: roundToNearest(eduAdjustedRate - expAdjustedRate, 500),
      languagePremium: roundToNearest(finalCalculatedRate - eduAdjustedRate, 500),
    }
  };
}

/**
 * Format currency in Indian Rupees
 */
export function formatRupees(amount) {
  return new Intl.NumberFormat('en-IN', {
    style: 'currency',
    currency: 'INR',
    maximumFractionDigits: 0,
  }).format(amount);
}
