<script type="text/javascript"
             src="board.js">
     </script>

<?php
error_reporting(E_ALL);
ini_set("display_errors", 1);
echo '<link rel="stylesheet" type="text/css" href="style.css">';
  $name = $_POST["name"];
  $q1 = $_POST["q1"];
echo $q1;
echo '<table style= style="border: 1px solid black" id="Table">';
//echo '<td >';
//echo '<td style="border: 1px solid black">';
echo '</tr>';
for ($i=1; $i <7 ; $i++) {

  //echo '<td>';
  //echo '<td style="border: 1px solid black">';
  //echo $Arr[$i];
  //echo '</th>';
  for ($j=1; $j <8 ; $j++) {
    $q=8-$j;
    $w=7-$i;
    $n="n$j$w";
    $r="r$j$w";
    $b="b$j$w";
    echo '<td style="border: 1px solid black" >


     <img src="https://people.eecs.ku.edu/~j024s900/project3/nodot.png" height="50" width="50"  id="'.$n.'">
     <img src="https://people.eecs.ku.edu/~j024s900/project3/bdot.png" height="50" width="50" hidden=1 id="'.$b.'">
     <img src="https://people.eecs.ku.edu/~j024s900/project3/reddot.png" height="50" width="50"  hidden=1 id="'.$r.'">
     </td>
    ';
    #echo Arr[i];
  }
  echo '</tr>';
}
?>
