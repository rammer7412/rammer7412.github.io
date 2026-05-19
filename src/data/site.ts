export const site = {
  title: 'Rammer CS Lab',
  description: '배운 것, 부순 것, 디버깅한 것, 끝내 이해한 것을 기록합니다.',
  author: 'rammer',
  github: 'https://github.com/rammer7412',
  email: 'coderammer7412@gmail.com'
};

export const categories = [
  {
    title: 'Operating Systems',
    label: 'OS',
    description: 'xv6, scheduling, paging, TLB, Copy-on-Write',
    href: '/notes/?category=OS',
    code: 'swtch(&c->scheduler, p->context);'
  },
  {
    title: 'Security',
    label: 'SEC',
    description: 'memory bug, exploit, format string, forensic notes',
    href: '/notes/?category=Security',
    code: 'printf(user_input);'
  },
  {
    title: 'C Programming',
    label: 'C',
    description: 'pointer, malloc/free, file I/O, struct problems',
    href: '/notes/?category=C',
    code: 'char *p = malloc(strlen(s) + 1);'
  },
  {
    title: 'Math',
    label: 'MATH',
    description: 'number theory, primitive root, QR/QNR, rings',
    href: '/notes/?category=Math',
    code: 'x^2 ≡ a (mod p)'
  },
  {
    title: 'Problem Solving',
    label: 'PS',
    description: 'BOJ, algorithms, binary search, proof of correctness',
    href: '/problems/',
    code: 'while (lo <= hi) { mid = ... }'
  },
  {
    title: 'Projects',
    label: 'LAB',
    description: 'Mini Judge, app development, deployment records',
    href: '/projects/',
    code: 'docker compose up -d --build'
  }
];

export const knowledgeMap = [
  {
    root: 'OS',
    children: [
      { name: 'Process', href: '/notes/?tag=process' },
      { name: 'Scheduling', href: '/notes/?tag=scheduling' },
      { name: 'Virtual Memory', href: '/notes/?tag=virtual-memory' },
      { name: 'Copy-on-Write', href: '/posts/xv6-copy-on-write/' }
    ]
  },
  {
    root: 'Security',
    children: [
      { name: 'Stack Overflow', href: '/notes/?tag=stack' },
      { name: 'Format String', href: '/posts/format-string-n/' },
      { name: 'Use After Free', href: '/notes/?tag=uaf' }
    ]
  },
  {
    root: 'C',
    children: [
      { name: 'Pointer', href: '/notes/?tag=pointer' },
      { name: 'malloc/free', href: '/posts/c-eof-char/' },
      { name: 'File I/O', href: '/notes/?tag=file-io' }
    ]
  }
];

export const mistakeCards = [
  {
    title: 'char로 EOF를 받으면 안 되는 이유',
    category: 'C',
    lesson: 'EOF는 char가 아니라 int로 받아야 구분이 안전하다.',
    href: '/posts/c-eof-char/'
  },
  {
    title: 'QEMU xv6.img write lock 오류',
    category: 'OS Lab',
    lesson: 'QEMU 프로세스가 중복 실행 중인지 먼저 확인한다.',
    href: '/labs/'
  },
  {
    title: 'Docker context 착각',
    category: 'DevOps',
    lesson: '배포 전 docker context ls로 현재 컨텍스트를 확인한다.',
    href: '/labs/'
  }
];
