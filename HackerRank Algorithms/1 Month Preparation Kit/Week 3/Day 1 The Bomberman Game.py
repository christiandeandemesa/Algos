"""
Bomberman lives in a rectangular grid. Each cell in the grid either contains a bomb or nothing at all.

Each bomb can be planted in any cell of the grid but once planted, it will detonate after exactly 3 seconds. Once a bomb detonates, it's 
destroyed — along with anything in its four neighboring cells. This means that if a bomb detonates in cell i, j any valid cells (i +/- 1, 
j) and (i, j +/- 1) are cleared. If there is a bomb in a neighboring cell, the neighboring bomb is destroyed without detonating, so there's 
no chain reaction.

Bomberman is immune to bombs, so he can move freely throughout the grid. Here's what he does:
    1. Initially, Bomberman arbitrarily plants bombs in some of the cells, the initial state.
    2. After one second, Bomberman does nothing.
    3. After one more second, Bomberman plants bombs in all cells without bombs, thus filling the whole grid with bombs. No bombs detonate 
       at this point.
    4. After one more second, any bombs planted exactly three seconds ago will detonate. Here, Bomberman stands back and observes.
    5. Bomberman then repeats steps 3 and 4 indefinitely.

Note that during every second Bomberman plants bombs, the bombs are planted simultaneously (i.e., at the exact same moment), and any bombs 
planted at the same time will detonate at the same time.

Given the initial configuration of the grid with the locations of Bomberman's first batch of planted bombs, determine the state of the 
grid after N seconds.

For example, if the initial grid looks like:
[['.', '.', '.'],
 ['.', 'O', '.'],
 ['.', '.', '.']]
it looks the same after the first second. 

After the second second, Bomberman has placed all his charges:
[['O', 'O', 'O'],
 ['O', 'O', 'O'],
 ['O', 'O', 'O']]

At the third second, the bomb in the middle blows up, emptying all surrounding cells:
[['O', '.', 'O'],
 ['.', '.', '.'],
 ['O', '.', 'O']]
"""

def bomberMan(n, grid):
    if n in [0, 1]: return grid
    elif n % 2 == 0: return ['O' * len(x) for x in grid]
    else:
        grid = [x.replace('O', '2') for x in grid]
        grid = [x.replace('.', '0') for x in grid]
        grid = [list(map(int, list(x))) for x in grid]
        R = len(grid)
        C = len(grid[0])
        t = 1
        while t < 4 + n % 4:
            t += 1
            destroyed = []
            for r in range(R):
                for c in range(C):
                    if grid[r][c] > 0: grid[r][c] -= 1
                    if t % 2 == 0 and grid[r][c] == 0: grid[r][c] = 3
                    elif grid[r][c] == 0:
                        destroyed.append([r, c])
                        if r < R-1: destroyed.append([r+1, c])
                        if r > 0: destroyed.append([r-1, c])
                        if c < C-1: destroyed.append([r, c+1])
                        if c > 0: destroyed.append([r, c-1])
            if destroyed:
                grid = [[2] * len(x) for x in grid]
                for r, c in destroyed:
                    grid[r][c] = 0
        grid = [''.join(list(map(str, x))) for x in grid]
        grid = [x.replace('2', 'O') for x in grid]
        grid = [x.replace('0', '.') for x in grid]
    
        return grid