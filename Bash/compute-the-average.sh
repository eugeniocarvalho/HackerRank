read n
count=0

for i in $(seq $n);
do
  read num
  let "count+=num"
done

echo $count / $n | bc -l | xargs printf "%.3f\n"