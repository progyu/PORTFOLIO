const lastStoneWeight = function(stones) {
  for(let i = 0; i <= stones.length; i++) {
      stones.sort((a,b)=> {
          return b - a;
      });
      
      if(stones[0] > stones[1]) {
        stones[0] = stones[0] - stones[1];
        stones.splice(1,1);
      }
      
      if(stones[0] === stones[1]) {
        stones.splice(0,2);
      }

      if(stones.length === 0) {
        return 0;
      }
    }
    return stones[0];
};

// const stones = [2,2];
// const stones = [2,7,4,1,8,1];
// const stones = [3,7,2];
const stones = [5,8,8,8,9];

console.log(lastStoneWeight(stones));