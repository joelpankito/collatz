def coll(n)
    $count = 1
    def seq(n)
        if n == 1
            return $count
        end
        if n%2 == 0 
            n = n/2
            $count = $count + 1
            seq(n)
        else
            n = 3*n+1
            $count +=1
            seq(n)
        end

        
    end
    seq(n)
end

num=0
n=0
for i in 1..1000000 do
    hold = coll(i)
    if hold > num
        num=hold
        n = i 
    end
end
puts "longest collatz sequence number is:#{n} with a length of:#{num}"