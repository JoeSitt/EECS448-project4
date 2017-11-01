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
echo '</tr>';
for ($i = 0; $i < 6; $i++) {
  for ($j = 0; $j < 7; $j++) {
    echo '<td style="border: 1px solid black" >

     <img src="https://people.eecs.ku.edu/~j024s900/project3/nodot.png" height="50" width="50"  id="n' . $i . $j . '">
     <img src="https://people.eecs.ku.edu/~j024s900/project3/bdot.png" height="50" width="50" hidden=1 id="b' . $i . $j . '">
     <img src="https://people.eecs.ku.edu/~j024s900/project3/reddot.png" height="50" width="50"  hidden=1 id="r' . $i . $j . '">
     </td>
    ';
  }
  echo '</tr>';
}
?>
