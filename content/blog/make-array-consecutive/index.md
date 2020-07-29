---
title: Make Array Consecutive
description: Count missing elements in a sorted array
date: 2020-06-09 23:34:36 -0500
tags: ["code challenge"]
---

Based on a Javascript challenge by [@PizzaPokerGuy][1].

> Bob has statues of different sizes, each statue having a non-negative integer size. He wants to arrange them so that each statue will be bigger than the previous one exactly by 1. He may need some additional statues to be able to accomplish that. Help him figure out the minimum number of additional statues needed.

## Solution

If the **distinct** elements of the array are sorted in ascending order $x_1,x_2,...,x_n$, then the number of missing numbers is the sum of the differences between each consecutive pair minus one:

$$
\begin{aligned}
&\sum_{i=2}^{n}{\left(x_i - x_{i-1} - 1\right)} \\
= &\sum_{i=2}^{n}{x_i} - \sum_{i=2}^{n}{x_{i-1}} - \sum_{i=2}^{n}{1} \\
= &(S - x_1) - (S - x_n) - (n - 1) \\
= &x_n - x_1 - n + 1
\end{aligned}
$$

### Python example

```python
def make_array_consecutive(numbers):
    min_val = max_val = numbers[0]
    distinct = {}
    distinct_count = 0

    for val in numbers:
        if val < min_val:
            min_val = val
        elif val > max_val:
            max_val = val

        if val not in distinct:
            distinct[val] = True
            distinct_count += 1

    return max_val - min_val - distinct_count + 1

assert make_array_consecutive([6, 2, 3, 8]) == 3  # 4, 5 and 7 are missing
assert make_array_consecutive([6, 5, 3, 4]) == 0
assert make_array_consecutive([1, 3, 5, 7, 9]) == 4
assert make_array_consecutive([10, 1]) == 8
assert make_array_consecutive([1, 1]) == 0
assert make_array_consecutive([1, 2, 1]) == 0
```

[1]: https://twitter.com/PizzaPokerGuy
