CREATE FUNCTION formatNumber AS(x)->if(
    toFloat64(x) <= 0.1,
    if(toFloat64(x) = 0, '0', x),
    replaceAll(toString(toDecimal64(x, 2)), '.00', '')
);
CREATE FUNCTION dollar AS(s)->concat('$', s);
CREATE FUNCTION imageUrl AS(s)->concat('currencies/', lower(s), '.webp');