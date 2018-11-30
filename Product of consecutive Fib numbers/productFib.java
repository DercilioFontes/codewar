public class ProdFib { // must be public for codewars	
	
	public static long[] productFib(long prod) {
    
    long numAnt = 0L;
    long numPost = 1L;
    
    while(prod > numAnt * numPost) {
      numPost = numPost + numAnt;
      numAnt = numPost - numAnt;
    }
    
    long[] result = { numAnt, numPost, prod == numAnt * numPost ? 1 : 0 };
    
	return result;
   }
}