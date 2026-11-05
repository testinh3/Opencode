#include <cstdio>
#include <initializer_list>
#include "emit_arm.h"
using namespace tkc_emit;
int main(){
  uint8_t out[32] = {0};
  size_t a = thumb_mov32(out, 0, 0, 0);
  size_t b = thumb_mov32(out, a, 1, 0);
  printf("stepwise n=%zu+%zu: ", a, b);
  for (int i=0;i<12;i++) printf("%02x", out[i]);
  printf("\n");
  uint8_t out2[32] = {0};
  size_t n = thumb_mov32(out2, thumb_mov32(out2, 0, 0, 0), 1, 0);
  printf("nested n=%zu: ", n);
  for (int i=0;i<12;i++) printf("%02x", out2[i]);
  printf("\n");
  return 0;
}
