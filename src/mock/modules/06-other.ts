import {
  requireImg,
} from '../utils'

const apps: AppItem[] = [{
  url: 'https://deno.land/',
  githubUrl: 'https://github.com/denoland',
  imgSrc: requireImg('deno.png'),
  keyWords: ['deno'],
  label: 'Deno',
  darkInvert: true,
}, {
  url: 'https://golang.org/',
  githubUrl: 'https://github.com/golang/go/',
  imgSrc: requireImg('golang.png'),
  keyWords: ['golang'],
  label: 'Golang',
}, {
  url: 'https://www.ruby-lang.org/',
  githubUrl: 'https://github.com/ruby/ruby/',
  imgSrc: requireImg('ruby.png'),
  keyWords: ['ruby'],
  label: 'Ruby',
}, {
  url: 'https://www.dartlang.org/',
  githubUrl: 'https://github.com/dart-lang/',
  imgSrc: requireImg('dart.png'),
  keyWords: ['dart'],
  label: 'Dart',
}, {
  url: 'https://www.python.org/',
  githubUrl: 'https://github.com/python',
  imgSrc: requireImg('python.png'),
  keyWords: ['python'],
  label: 'Python',
}, {
  url: 'https://www.docker.com/',
  githubUrl: 'https://github.com/docker',
  imgSrc: requireImg('docker.png'),
  keyWords: ['docker'],
  label: 'Docker',
}]

export default apps
