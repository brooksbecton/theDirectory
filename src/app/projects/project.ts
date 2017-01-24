export class Project {
  id: number;
  components: Array<string>;
  desc: string;
  futurePlans: Array<string>;
  githubLink: string;
  name: string;
  projectUrl: string;
  
  constructor(
  id = "",
  components = [],
  desc = "",
  futurePlans = [],
  githubLink = "",
  name = "",
  projectUrl = "",
  ){}

}
