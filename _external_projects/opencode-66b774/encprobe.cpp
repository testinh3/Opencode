#include <initializer_list>
#include <cstdio>
#include "emit_arm.h"
int main(){
  uint8_t out[32];
  for (int t : {1,3,4,5}) {
    size_t n = tkc_emit::arm32_return(out, t, 0.0, true);
    printf("type=%d n=%zu: ", t, n);
    for (size_t i=0;i<n;i++) printf("%02x", out[i]);
    printf("\n");
  }
  size_t n = tkc_emit::thumb_mov32(out, 4, 1, 0);
  printf("thumb_mov32(at=4,rd=1,0) n=%zu: ", n);
  for (int i=0;i<12;i++) printf("%02x", out[i]);
  printf("\n");
  return 0;
}
