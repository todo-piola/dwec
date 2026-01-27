export function isLegalPawnMove(from, to){
  return dobleMovimientoPeon(from, to) || movimientoSimplePeon(from, to)
}

function dobleMovimientoPeon(from, to) {
  if (from === 2 && to === 4) return true;
  return false;
}

function movimientoSimplePeon(from, to) {
  if (to === from + 1) return true;
  return false;
}