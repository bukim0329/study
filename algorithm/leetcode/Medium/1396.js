class UndergroundSystem {
  constructor() {
    this.map = new Map();
    this.data = new Map();
  }
  
  /** 
   * @param {number} id 
   * @param {string} stationName 
   * @param {number} t
   * @return {void}
   */
  checkIn (id, stationName, t) {
    this.map.set(id, [stationName, t]);
  }
  
  /** 
   * @param {number} id 
   * @param {string} stationName 
   * @param {number} t
   * @return {void}
   */
  
  checkOut(id, stationName, t) {
    const [startStation, startTime] = this.map.get(id);
    const [average, num] = this.data.get(`${startStation},${stationName}`) || [0, 0];
    this.data.set(`${startStation},${stationName}`, [(average * num + t - startTime) / (num + 1), num + 1]);
  }
  /** 
   * @param {string} startStation 
   * @param {string} endStation
   * @return {number}
   */
  
  getAverageTime(startStation, endStation) {
    return this.data.get(`${startStation},${endStation}`)[0];
  }
}

/** 
 * Your UndergroundSystem object will be instantiated and called as such:
 * var obj = new UndergroundSystem()
 * obj.checkIn(id,stationName,t)
 * obj.checkOut(id,stationName,t)
 * var param_3 = obj.getAverageTime(startStation,endStation)
 */