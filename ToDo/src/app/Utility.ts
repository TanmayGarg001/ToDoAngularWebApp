export class Utility {
  static taskList: any[] = [];
  static generateUniqueId(index: number) {
    let hash = 0;
    const indexStr = index.toString();
    for (let i = 0; i < indexStr.length; i++) {
      const char = indexStr.charCodeAt(i);
      hash = ((hash << 5) - hash) + char;
      hash = hash & hash;
    }
    return hash;
  }
}
