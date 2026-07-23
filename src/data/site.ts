export const site = {
  title: 'Rammer Lab',
  description: '개인정보보호와 기술을 함께 공부하며, 시스템·보안·포렌식·개발·리서치의 연결을 기록합니다.',
  author: 'rammer',
  github: 'https://github.com/rammer7412',
  email: 'coderammer7412@gmail.com',
  locale: 'ko_KR',
  adsenseClient: 'ca-pub-8463924430150624'
};

export const navigation = [
  { label: 'About', href: '/about/' },
  { label: 'Writing', href: '/writing/' },
  { label: 'Projects', href: '/projects/' },
  { label: 'Lectures', href: '/lectures/' },
  { label: 'Journal', href: '/journal/' }
];

export const domainMeta: Record<string, { label: string; short: string; href: string }> = {
  math: { label: '수학', short: 'Math', href: '/writing/?domain=math' },
  'operating-systems': { label: '운영체제', short: 'OS', href: '/writing/?domain=operating-systems' },
  'artificial-intelligence': { label: '인공지능', short: 'AI', href: '/writing/?domain=artificial-intelligence' },
  'privacy-governance': { label: '개인정보보호·거버넌스', short: 'Privacy', href: '/writing/?domain=privacy-governance' },
  'privacy-engineering': { label: '프라이버시 엔지니어링', short: 'Engineering', href: '/writing/?domain=privacy-engineering' },
  'security-forensics': { label: '보안·포렌식', short: 'Security', href: '/writing/?domain=security-forensics' },
  'systems-development': { label: '시스템·개발', short: 'Systems', href: '/writing/?domain=systems-development' },
  'cryptography-math': { label: '암호·수학', short: 'Crypto', href: '/writing/?domain=cryptography-math' },
  'research-cases': { label: '리서치·사례 분석', short: 'Research', href: '/writing/?domain=research-cases' },
  project: { label: '프로젝트', short: 'Project', href: '/projects/' }
};

export const formatMeta: Record<string, string> = {
  'study-note': '학습 노트',
  lab: '실습 기록',
  'problem-solving': '문제 풀이',
  'paper-review': '논문 리뷰',
  'report-review': '보고서 리뷰',
  'case-analysis': '사례 분석',
  project: '프로젝트',
  opinion: '견해'
};

export const categories = [
  {
    title: '개인정보보호·거버넌스',
    label: 'PRIVACY',
    description: '개인정보 생명주기, 정보주체 권리, 법·정책과 조직의 보호체계를 정리합니다.',
    href: '/writing/?domain=privacy-governance',
    topics: ['생명주기', '법·정책', '관리체계']
  },
  {
    title: '프라이버시 엔지니어링',
    label: 'ENGINEERING',
    description: '최소 수집, 동의 설계, 데이터 흐름, 접근통제와 보호조치를 기술적으로 탐구합니다.',
    href: '/writing/?domain=privacy-engineering',
    topics: ['Privacy by Design', '데이터 흐름', '보호조치']
  },
  {
    title: '보안·포렌식',
    label: 'SECURITY',
    description: '소프트웨어 취약점, 시스템 보안, 디지털포렌식과 침해사고 분석을 기록합니다.',
    href: '/writing/?domain=security-forensics',
    topics: ['Software Security', 'Forensics', 'Incident']
  },
  {
    title: '시스템·개발',
    label: 'SYSTEMS',
    description: '운영체제, C·Python, 웹 개발과 배포 과정에서 이해한 기술 기반을 정리합니다.',
    href: '/writing/?domain=systems-development',
    topics: ['OS', 'Programming', 'Web']
  },
  {
    title: '암호·수학',
    label: 'CRYPTO',
    description: '암호수학과 정수론을 개인정보 보호 기술의 기반 관점에서 공부합니다.',
    href: '/writing/?domain=cryptography-math',
    topics: ['Cryptography', 'Number Theory', 'Math']
  },
  {
    title: '리서치·사례 분석',
    label: 'RESEARCH',
    description: '논문과 보고서를 읽고, 기업과 서비스의 개인정보보호 체계를 분석합니다.',
    href: '/writing/?domain=research-cases',
    topics: ['Paper Review', 'Case Study', 'Opinion']
  }
];

export const perspectives = [
  {
    number: '01',
    title: 'Technology',
    description: '개인정보가 실제 시스템에서 수집·저장·처리되는 구조와 보안 기술을 이해합니다.'
  },
  {
    number: '02',
    title: 'Privacy & Governance',
    description: '개인정보보호 원칙과 법·정책, 조직의 관리체계를 기술 구현과 연결합니다.'
  },
  {
    number: '03',
    title: 'Research & Practice',
    description: '논문, 보고서, 기업 사례와 직접 수행한 프로젝트를 바탕으로 견해를 정리합니다.'
  }
];

export const knowledgeMap = [
  {
    root: '개인정보 생명주기',
    description: '데이터가 서비스 안에서 이동하는 전체 흐름',
    children: [
      { name: '수집·동의', href: '/writing/?tag=consent' },
      { name: '이용·분석', href: '/writing/?tag=processing' },
      { name: '제공·위탁', href: '/writing/?tag=sharing' },
      { name: '보관·파기', href: '/writing/?tag=retention' }
    ]
  },
  {
    root: '기술 기반',
    description: '개인정보를 안전하게 처리하기 위한 컴퓨터공학 기반',
    children: [
      { name: '시스템·운영체제', href: '/writing/?domain=systems-development' },
      { name: '소프트웨어 보안', href: '/writing/?domain=security-forensics' },
      { name: '디지털포렌식', href: '/writing/?tag=forensics' },
      { name: '암호·수학', href: '/writing/?domain=cryptography-math' }
    ]
  },
  {
    root: '보호체계',
    description: '법·정책·조직·기술을 함께 보는 관리 관점',
    children: [
      { name: 'Privacy by Design', href: '/writing/?tag=privacy-by-design' },
      { name: '위험 평가', href: '/writing/?tag=risk' },
      { name: '접근통제·로그', href: '/writing/?tag=access-control' },
      { name: '정보주체 권리', href: '/writing/?tag=data-subject' }
    ]
  },
  {
    root: '리서치 과정',
    description: '자료를 읽고 분석하여 내 관점으로 남기는 방법',
    children: [
      { name: '논문 리뷰', href: '/writing/?format=paper-review' },
      { name: '보고서 리뷰', href: '/writing/?format=report-review' },
      { name: '기업·서비스 분석', href: '/writing/?format=case-analysis' },
      { name: '프로젝트 회고', href: '/projects/' }
    ]
  }
];

export const learningNotes = [
  {
    title: 'EOF는 왜 int로 받아야 할까',
    category: 'Programming',
    lesson: '함수의 반환형과 특수 값을 함께 살피는 습관을 기록했습니다.',
    href: '/posts/c-eof-char/'
  },
  {
    title: 'Copy-on-Write에서 놓치기 쉬운 지점',
    category: 'Systems',
    lesson: '참조 횟수, 쓰기 권한, TLB 갱신이 하나의 흐름으로 연결됩니다.',
    href: '/posts/xv6-copy-on-write/'
  },
  {
    title: '포맷 문자열이 쓰기 취약점이 되는 과정',
    category: 'Security',
    lesson: '입력 검증 문제를 메모리 구조와 함수 호출 관점에서 다시 정리했습니다.',
    href: '/posts/format-string-n/'
  }
];

export const currentStudy = [
  '개인정보보호 관리체계와 Privacy by Design',
  '소프트웨어 보안과 디지털포렌식',
  '운영체제·암호수학 기반 다지기',
  '기업 개인정보처리방침 및 보호체계 분석 방법'
];
