<?php

function square_digits($num): int {
  $str = "".$num;
  
  for($i = 0; $i < strlen($str); $i++) {
    $str[$i] = settype($str[$i], 'integer') * settype($str[$i], 'integer');
  }
  
  return settype($str, 'integer');
}

  
?>