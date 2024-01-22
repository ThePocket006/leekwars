import { ChipTemplate } from '@/common/leekwars/model/chip'

const CHIPS: {[key: string]: ChipTemplate} = Object.freeze({
  '1': { id: 1, name: 'shock', level: 2, min_range: 0, max_range: 6, launch_type: 7, effects: [ { id: 1, value1: 7, value2: 2, turns: 0, targets: 31, modifiers: 0, type: 1 } ], cost: 2, area: 1, cooldown: 0, los: true, team_cooldown: false, initial_cooldown: 0, template: 6, type: 1 },
  '2': { id: 2, name: 'ice', level: 9, min_range: 0, max_range: 8, launch_type: 7, effects: [ { id: 1, value1: 17, value2: 2, turns: 0, targets: 31, modifiers: 0, type: 1 } ], cost: 4, area: 1, cooldown: 0, los: true, team_cooldown: false, initial_cooldown: 0, template: 15, type: 1 },
  '3': { id: 3, name: 'bandage', level: 3, min_range: 0, max_range: 6, launch_type: 7, effects: [ { id: 2, value1: 13, value2: 5, turns: 0, targets: 31, modifiers: 0, type: 2 } ], cost: 2, area: 1, cooldown: 1, los: true, team_cooldown: false, initial_cooldown: 0, template: 1, type: 2 },
  '4': { id: 4, name: 'cure', level: 20, min_range: 0, max_range: 5, launch_type: 7, effects: [ { id: 2, value1: 35, value2: 8, turns: 0, targets: 31, modifiers: 0, type: 2 } ], cost: 4, area: 1, cooldown: 2, los: true, team_cooldown: false, initial_cooldown: 0, template: 2, type: 2 },
  '5': { id: 5, name: 'flame', level: 29, min_range: 2, max_range: 7, launch_type: 7, effects: [ { id: 1, value1: 29, value2: 2, turns: 0, targets: 31, modifiers: 0, type: 1 } ], cost: 4, area: 1, cooldown: 0, los: true, team_cooldown: false, initial_cooldown: 0, template: 10, type: 1 },
  '6': { id: 6, name: 'flash', level: 24, min_range: 1, max_range: 10, launch_type: 1, effects: [ { id: 1, value1: 32, value2: 3, turns: 0, targets: 31, modifiers: 0, type: 1 } ], cost: 3, area: 3, cooldown: 1, los: true, team_cooldown: false, initial_cooldown: 0, template: 7, type: 1 },
  '7': { id: 7, name: 'rock', level: 13, min_range: 2, max_range: 6, launch_type: 7, effects: [ { id: 1, value1: 38, value2: 1, turns: 0, targets: 31, modifiers: 0, type: 1 } ], cost: 5, area: 1, cooldown: 1, los: true, team_cooldown: false, initial_cooldown: 0, template: 13, type: 1 },
  '8': { id: 8, name: 'protein', level: 6, min_range: 0, max_range: 4, launch_type: 7, effects: [ { id: 38, value1: 80, value2: 20, turns: 2, targets: 30, modifiers: 0, type: 5 } ], cost: 3, area: 1, cooldown: 3, los: true, team_cooldown: false, initial_cooldown: 0, template: 24, type: 5 },
  '9': { id: 9, name: 'stretching', level: 17, min_range: 0, max_range: 5, launch_type: 7, effects: [ { id: 41, value1: 80, value2: 20, turns: 2, targets: 30, modifiers: 0, type: 5 } ], cost: 3, area: 1, cooldown: 3, los: true, team_cooldown: false, initial_cooldown: 0, template: 27, type: 5 },
  '10': { id: 10, name: 'drip', level: 56, min_range: 2, max_range: 6, launch_type: 7, effects: [ { id: 2, value1: 35, value2: 5, turns: 0, targets: 31, modifiers: 0, type: 2 } ], cost: 5, area: 4, cooldown: 1, los: true, team_cooldown: false, initial_cooldown: 0, template: 3, type: 2 },
  '11': { id: 11, name: 'vaccine', level: 80, min_range: 0, max_range: 6, launch_type: 7, effects: [ { id: 2, value1: 38, value2: 4, turns: 3, targets: 30, modifiers: 0, type: 2 } ], cost: 6, area: 1, cooldown: 3, los: true, team_cooldown: false, initial_cooldown: 0, template: 5, type: 2 },
  '12': { id: 12, name: 'seven_league_boots', level: 203, min_range: 0, max_range: 8, launch_type: 7, effects: [ { id: 7, value1: 0.5, value2: 0.1, turns: 3, targets: 30, modifiers: 0, type: 5 } ], cost: 4, area: 6, cooldown: 2, los: true, team_cooldown: false, initial_cooldown: 0, template: 32, type: 5 },
  '13': { id: 13, name: 'winged_boots', level: 175, min_range: 0, max_range: 2, launch_type: 7, effects: [ { id: 31, value1: 3, value2: 0, turns: 1, targets: 14, modifiers: 0, type: 5 } ], cost: 6, area: 1, cooldown: 5, los: true, team_cooldown: false, initial_cooldown: 0, template: 31, type: 5 },
  '14': { id: 14, name: 'leather_boots', level: 22, min_range: 0, max_range: 5, launch_type: 7, effects: [ { id: 31, value1: 2, value2: 0, turns: 2, targets: 30, modifiers: 0, type: 5 } ], cost: 3, area: 1, cooldown: 5, los: true, team_cooldown: false, initial_cooldown: 0, template: 30, type: 5 },
  '15': { id: 15, name: 'motivation', level: 14, min_range: 0, max_range: 5, launch_type: 7, effects: [ { id: 32, value1: 3, value2: 0, turns: 2, targets: 30, modifiers: 0, type: 5 } ], cost: 4, area: 1, cooldown: 6, los: true, team_cooldown: false, initial_cooldown: 0, template: 33, type: 5 },
  '16': { id: 16, name: 'adrenaline', level: 156, min_range: 0, max_range: 3, launch_type: 7, effects: [ { id: 32, value1: 5, value2: 0, turns: 1, targets: 14, modifiers: 0, type: 5 } ], cost: 1, area: 1, cooldown: 7, los: true, team_cooldown: false, initial_cooldown: 0, template: 34, type: 5 },
  '17': { id: 17, name: 'rage', level: 226, min_range: 0, max_range: 8, launch_type: 7, effects: [ { id: 8, value1: 0.5, value2: 0.1, turns: 3, targets: 30, modifiers: 0, type: 5 } ], cost: 4, area: 5, cooldown: 2, los: true, team_cooldown: false, initial_cooldown: 0, template: 35, type: 5 },
  '18': { id: 18, name: 'spark', level: 19, min_range: 0, max_range: 10, launch_type: 7, effects: [ { id: 1, value1: 8, value2: 8, turns: 0, targets: 31, modifiers: 0, type: 1 } ], cost: 3, area: 1, cooldown: 0, los: false, team_cooldown: false, initial_cooldown: 0, template: 9, type: 1 },
  '19': { id: 19, name: 'pebble', level: 4, min_range: 0, max_range: 5, launch_type: 7, effects: [ { id: 1, value1: 2, value2: 32, turns: 0, targets: 31, modifiers: 0, type: 1 } ], cost: 2, area: 1, cooldown: 1, los: true, team_cooldown: false, initial_cooldown: 0, template: 12, type: 1 },
  '20': { id: 20, name: 'shield', level: 35, min_range: 0, max_range: 4, launch_type: 7, effects: [ { id: 6, value1: 20, value2: 0, turns: 3, targets: 30, modifiers: 0, type: 4 } ], cost: 4, area: 1, cooldown: 4, los: true, team_cooldown: false, initial_cooldown: 0, template: 18, type: 4 },
  '21': { id: 21, name: 'helmet', level: 10, min_range: 0, max_range: 4, launch_type: 7, effects: [ { id: 6, value1: 15, value2: 0, turns: 2, targets: 30, modifiers: 0, type: 4 } ], cost: 3, area: 1, cooldown: 3, los: true, team_cooldown: false, initial_cooldown: 0, template: 19, type: 4 },
  '22': { id: 22, name: 'armor', level: 74, min_range: 0, max_range: 4, launch_type: 7, effects: [ { id: 6, value1: 25, value2: 0, turns: 4, targets: 30, modifiers: 0, type: 4 } ], cost: 6, area: 1, cooldown: 5, los: true, team_cooldown: false, initial_cooldown: 0, template: 20, type: 4 },
  '23': { id: 23, name: 'wall', level: 18, min_range: 0, max_range: 3, launch_type: 7, effects: [ { id: 5, value1: 5, value2: 1, turns: 2, targets: 30, modifiers: 0, type: 4 } ], cost: 3, area: 1, cooldown: 3, los: true, team_cooldown: false, initial_cooldown: 0, template: 21, type: 4 },
  '24': { id: 24, name: 'rampart', level: 117, min_range: 2, max_range: 7, launch_type: 7, effects: [ { id: 5, value1: 9, value2: 1, turns: 3, targets: 22, modifiers: 0, type: 4 }, { id: 5, value1: 5, value2: 1, turns: 3, targets: 14, modifiers: 0, type: 4 } ], cost: 5, area: 1, cooldown: 2, los: true, team_cooldown: false, initial_cooldown: 0, template: 22, type: 4 },
  '25': { id: 25, name: 'steroid', level: 134, min_range: 0, max_range: 5, launch_type: 7, effects: [ { id: 38, value1: 170, value2: 20, turns: 3, targets: 30, modifiers: 0, type: 5 } ], cost: 7, area: 1, cooldown: 5, los: true, team_cooldown: false, initial_cooldown: 0, template: 25, type: 5 },
  '26': { id: 26, name: 'doping', level: 207, min_range: 0, max_range: 6, launch_type: 7, effects: [ { id: 3, value1: 35, value2: 5, turns: 3, targets: 30, modifiers: 0, type: 5 }, { id: 25, value1: 35, value2: 5, turns: 3, targets: 30, modifiers: 0, type: 0 } ], cost: 5, area: 4, cooldown: 1, los: true, team_cooldown: false, initial_cooldown: 0, template: 26, type: 5 },
  '27': { id: 27, name: 'reflexes', level: 197, min_range: 0, max_range: 6, launch_type: 7, effects: [ { id: 4, value1: 35, value2: 5, turns: 3, targets: 30, modifiers: 0, type: 5 } ], cost: 5, area: 7, cooldown: 2, los: true, team_cooldown: false, initial_cooldown: 0, template: 29, type: 5 },
  '28': { id: 28, name: 'warm_up', level: 127, min_range: 0, max_range: 3, launch_type: 7, effects: [ { id: 41, value1: 190, value2: 20, turns: 3, targets: 30, modifiers: 0, type: 5 } ], cost: 7, area: 1, cooldown: 5, los: true, team_cooldown: false, initial_cooldown: 0, template: 28, type: 5 },
  '29': { id: 29, name: 'fortress', level: 194, min_range: 0, max_range: 3, launch_type: 7, effects: [ { id: 5, value1: 8, value2: 1, turns: 3, targets: 30, modifiers: 0, type: 4 } ], cost: 6, area: 1, cooldown: 4, los: true, team_cooldown: false, initial_cooldown: 0, template: 23, type: 4 },
  '30': { id: 30, name: 'stalactite', level: 50, min_range: 2, max_range: 7, launch_type: 7, effects: [ { id: 1, value1: 64, value2: 3, turns: 0, targets: 31, modifiers: 0, type: 1 } ], cost: 6, area: 1, cooldown: 3, los: true, team_cooldown: false, initial_cooldown: 0, template: 16, type: 1 },
  '31': { id: 31, name: 'iceberg', level: 100, min_range: 3, max_range: 5, launch_type: 1, effects: [ { id: 1, value1: 82, value2: 8, turns: 0, targets: 31, modifiers: 0, type: 1 } ], cost: 7, area: 4, cooldown: 3, los: true, team_cooldown: false, initial_cooldown: 0, template: 17, type: 1 },
  '32': { id: 32, name: 'rockfall', level: 77, min_range: 5, max_range: 7, launch_type: 7, effects: [ { id: 1, value1: 50, value2: 8, turns: 0, targets: 31, modifiers: 0, type: 1 } ], cost: 5, area: 4, cooldown: 1, los: true, team_cooldown: false, initial_cooldown: 0, template: 14, type: 1 },
  '33': { id: 33, name: 'lightning', level: 180, min_range: 2, max_range: 5, launch_type: 1, effects: [ { id: 1, value1: 35, value2: 12, turns: 0, targets: 27, modifiers: 0, type: 1 } ], cost: 4, area: 4, cooldown: 0, los: true, team_cooldown: false, initial_cooldown: 0, template: 8, type: 1 },
  '34': { id: 34, name: 'liberation', level: 60, min_range: 0, max_range: 6, launch_type: 7, effects: [ { id: 9, value1: 60, value2: 0, turns: 0, targets: 31, modifiers: 0, type: 9 } ], cost: 5, area: 1, cooldown: 5, los: true, team_cooldown: false, initial_cooldown: 0, template: 36, type: 9 },
  '35': { id: 35, name: 'regeneration', level: 122, min_range: 0, max_range: 3, launch_type: 7, effects: [ { id: 2, value1: 500, value2: 0, turns: 0, targets: 31, modifiers: 0, type: 2 } ], cost: 8, area: 1, cooldown: -1, los: true, team_cooldown: false, initial_cooldown: 0, template: 4, type: 2 },
  '36': { id: 36, name: 'meteorite', level: 160, min_range: 5, max_range: 9, launch_type: 7, effects: [ { id: 1, value1: 70, value2: 10, turns: 0, targets: 31, modifiers: 0, type: 1 } ], cost: 8, area: 4, cooldown: 3, los: true, team_cooldown: false, initial_cooldown: 0, template: 11, type: 1 },
  '59': { id: 59, name: 'teleportation', level: 200, min_range: 1, max_range: 12, launch_type: 7, effects: [ { id: 10, value1: 0, value2: 0, turns: 0, targets: 31, modifiers: 0, type: 9 } ], cost: 7, area: 1, cooldown: 10, los: false, team_cooldown: false, initial_cooldown: 1, template: 37, type: 9 },
  '67': { id: 67, name: 'armoring', level: 68, min_range: 0, max_range: 3, launch_type: 7, effects: [ { id: 12, value1: 25, value2: 5, turns: 0, targets: 31, modifiers: 0, type: 2 } ], cost: 5, area: 1, cooldown: 5, los: true, team_cooldown: false, initial_cooldown: 0, template: 38, type: 2 },
  '68': { id: 68, name: 'inversion', level: 150, min_range: 1, max_range: 14, launch_type: 1, effects: [ { id: 11, value1: 0, value2: 0, turns: 0, targets: 31, modifiers: 0, type: 9 }, { id: 2, value1: 50, value2: 0, turns: 0, targets: 30, modifiers: 0, type: 2 }, { id: 26, value1: 20, value2: 0, turns: 1, targets: 29, modifiers: 1, type: 0 } ], cost: 4, area: 1, cooldown: 4, los: true, team_cooldown: false, initial_cooldown: 1, template: 39, type: 9 },
  '73': { id: 73, name: 'puny_bulb', level: 48, min_range: 1, max_range: 3, launch_type: 7, effects: [ { id: 14, value1: 1, value2: 0, turns: 0, targets: 31, modifiers: 0, type: 8 } ], cost: 6, area: 1, cooldown: 4, los: true, team_cooldown: true, initial_cooldown: 0, template: 40, type: 8 },
  '74': { id: 74, name: 'fire_bulb', level: 190, min_range: 2, max_range: 3, launch_type: 7, effects: [ { id: 14, value1: 2, value2: 0, turns: 0, targets: 31, modifiers: 0, type: 8 } ], cost: 14, area: 1, cooldown: 6, los: true, team_cooldown: true, initial_cooldown: 0, template: 41, type: 8 },
  '75': { id: 75, name: 'healer_bulb', level: 174, min_range: 1, max_range: 2, launch_type: 7, effects: [ { id: 14, value1: 3, value2: 0, turns: 0, targets: 31, modifiers: 0, type: 8 } ], cost: 14, area: 1, cooldown: 7, los: true, team_cooldown: true, initial_cooldown: 0, template: 42, type: 8 },
  '76': { id: 76, name: 'rocky_bulb', level: 105, min_range: 1, max_range: 3, launch_type: 7, effects: [ { id: 14, value1: 4, value2: 0, turns: 0, targets: 31, modifiers: 0, type: 8 } ], cost: 10, area: 1, cooldown: 5, los: true, team_cooldown: true, initial_cooldown: 0, template: 43, type: 8 },
  '77': { id: 77, name: 'iced_bulb', level: 130, min_range: 1, max_range: 2, launch_type: 7, effects: [ { id: 14, value1: 5, value2: 0, turns: 0, targets: 31, modifiers: 0, type: 8 } ], cost: 12, area: 1, cooldown: 5, los: true, team_cooldown: true, initial_cooldown: 0, template: 44, type: 8 },
  '78': { id: 78, name: 'lightning_bulb', level: 280, min_range: 1, max_range: 5, launch_type: 7, effects: [ { id: 14, value1: 6, value2: 0, turns: 0, targets: 31, modifiers: 0, type: 8 } ], cost: 16, area: 1, cooldown: 6, los: true, team_cooldown: true, initial_cooldown: 0, template: 45, type: 8 },
  '79': { id: 79, name: 'metallic_bulb', level: 230, min_range: 1, max_range: 1, launch_type: 7, effects: [ { id: 14, value1: 7, value2: 0, turns: 0, targets: 31, modifiers: 0, type: 8 } ], cost: 16, area: 1, cooldown: 7, los: true, team_cooldown: true, initial_cooldown: 0, template: 46, type: 8 },
  '80': { id: 80, name: 'remission', level: 170, min_range: 0, max_range: 7, launch_type: 7, effects: [ { id: 2, value1: 66, value2: 11, turns: 0, targets: 30, modifiers: 0, type: 2 } ], cost: 5, area: 1, cooldown: 1, los: true, team_cooldown: false, initial_cooldown: 0, template: 47, type: 2 },
  '81': { id: 81, name: 'carapace', level: 141, min_range: 1, max_range: 6, launch_type: 7, effects: [ { id: 6, value1: 55, value2: 0, turns: 3, targets: 22, modifiers: 0, type: 4 }, { id: 6, value1: 15, value2: 5, turns: 3, targets: 14, modifiers: 0, type: 4 } ], cost: 5, area: 1, cooldown: 1, los: true, team_cooldown: false, initial_cooldown: 0, template: 48, type: 4 },
  '84': { id: 84, name: 'resurrection', level: 301, min_range: 1, max_range: 2, launch_type: 7, effects: [ { id: 15, value1: 0, value2: 0, turns: 0, targets: 31, modifiers: 0, type: 2 } ], cost: 15, area: 1, cooldown: 15, los: true, team_cooldown: false, initial_cooldown: 0, template: 49, type: 2 },
  '85': { id: 85, name: 'devil_strike', level: 171, min_range: 0, max_range: 0, launch_type: 7, effects: [ { id: 1, value1: 25, value2: 0, turns: 0, targets: 31, modifiers: 0, type: 1 }, { id: 1, value1: 25, value2: 0, turns: 0, targets: 31, modifiers: 0, type: 1 }, { id: 1, value1: 25, value2: 0, turns: 0, targets: 31, modifiers: 0, type: 1 }, { id: 1, value1: 25, value2: 0, turns: 0, targets: 31, modifiers: 0, type: 1 }, { id: 1, value1: 25, value2: 0, turns: 0, targets: 31, modifiers: 0, type: 1 } ], cost: 6, area: 5, cooldown: 3, los: true, team_cooldown: false, initial_cooldown: 0, template: 50, type: 1 },
  '88': { id: 88, name: 'whip', level: 119, min_range: 0, max_range: 6, launch_type: 7, effects: [ { id: 8, value1: 0.6, value2: 0.1, turns: 2, targets: 22, modifiers: 0, type: 5 } ], cost: 4, area: 1, cooldown: 1, los: true, team_cooldown: false, initial_cooldown: 0, template: 51, type: 5 },
  '89': { id: 89, name: 'loam', level: 111, min_range: 1, max_range: 7, launch_type: 7, effects: [ { id: 12, value1: 43, value2: 5, turns: 0, targets: 22, modifiers: 0, type: 2 }, { id: 12, value1: 13, value2: 5, turns: 0, targets: 10, modifiers: 0, type: 2 } ], cost: 4, area: 1, cooldown: 3, los: true, team_cooldown: false, initial_cooldown: 0, template: 52, type: 2 },
  '90': { id: 90, name: 'fertilizer', level: 205, min_range: 1, max_range: 5, launch_type: 7, effects: [ { id: 12, value1: 80, value2: 10, turns: 0, targets: 22, modifiers: 0, type: 2 } ], cost: 6, area: 1, cooldown: 3, los: true, team_cooldown: false, initial_cooldown: 0, template: 53, type: 2 },
  '91': { id: 91, name: 'acceleration', level: 143, min_range: 0, max_range: 8, launch_type: 7, effects: [ { id: 7, value1: 0.4, value2: 0.1, turns: 2, targets: 22, modifiers: 0, type: 5 } ], cost: 4, area: 1, cooldown: 1, los: true, team_cooldown: false, initial_cooldown: 0, template: 54, type: 5 },
  '92': { id: 92, name: 'slow_down', level: 98, min_range: 1, max_range: 8, launch_type: 7, effects: [ { id: 17, value1: 0.3, value2: 0.1, turns: 1, targets: 31, modifiers: 1, type: 7 } ], cost: 3, area: 1, cooldown: 0, los: true, team_cooldown: false, initial_cooldown: 0, template: 55, type: 7 },
  '93': { id: 93, name: 'ball_and_chain', level: 184, min_range: 1, max_range: 6, launch_type: 7, effects: [ { id: 17, value1: 0.4, value2: 0.1, turns: 2, targets: 31, modifiers: 1, type: 7 } ], cost: 5, area: 4, cooldown: 2, los: true, team_cooldown: false, initial_cooldown: 0, template: 56, type: 7 },
  '94': { id: 94, name: 'tranquilizer', level: 65, min_range: 1, max_range: 8, launch_type: 7, effects: [ { id: 18, value1: 0.3, value2: 0.1, turns: 1, targets: 31, modifiers: 1, type: 7 } ], cost: 3, area: 3, cooldown: 0, los: true, team_cooldown: false, initial_cooldown: 0, template: 57, type: 7 },
  '95': { id: 95, name: 'soporific', level: 145, min_range: 1, max_range: 6, launch_type: 7, effects: [ { id: 18, value1: 0.4, value2: 0.1, turns: 3, targets: 31, modifiers: 1, type: 7 } ], cost: 5, area: 5, cooldown: 1, los: true, team_cooldown: false, initial_cooldown: 0, template: 58, type: 7 },
  '96': { id: 96, name: 'solidification', level: 40, min_range: 0, max_range: 3, launch_type: 7, effects: [ { id: 42, value1: 190, value2: 30, turns: 3, targets: 30, modifiers: 0, type: 5 } ], cost: 6, area: 1, cooldown: 5, los: true, team_cooldown: false, initial_cooldown: 0, template: 60, type: 5 },
  '97': { id: 97, name: 'venom', level: 42, min_range: 1, max_range: 10, launch_type: 7, effects: [ { id: 13, value1: 15, value2: 5, turns: 3, targets: 31, modifiers: 1, type: 6 } ], cost: 4, area: 1, cooldown: 1, los: true, team_cooldown: false, initial_cooldown: 0, template: 61, type: 6 },
  '98': { id: 98, name: 'toxin', level: 125, min_range: 1, max_range: 7, launch_type: 7, effects: [ { id: 13, value1: 25, value2: 10, turns: 3, targets: 31, modifiers: 1, type: 6 } ], cost: 5, area: 4, cooldown: 2, los: true, team_cooldown: false, initial_cooldown: 0, template: 62, type: 6 },
  '99': { id: 99, name: 'plague', level: 210, min_range: 1, max_range: 5, launch_type: 7, effects: [ { id: 13, value1: 40, value2: 10, turns: 4, targets: 31, modifiers: 1, type: 6 } ], cost: 6, area: 5, cooldown: 4, los: true, team_cooldown: false, initial_cooldown: 0, template: 63, type: 6 },
  '100': { id: 100, name: 'thorn', level: 132, min_range: 0, max_range: 3, launch_type: 7, effects: [ { id: 20, value1: 3, value2: 1, turns: 2, targets: 30, modifiers: 0, type: 3 } ], cost: 4, area: 3, cooldown: 3, los: true, team_cooldown: false, initial_cooldown: 0, template: 64, type: 3 },
  '101': { id: 101, name: 'mirror', level: 246, min_range: 0, max_range: 2, launch_type: 7, effects: [ { id: 20, value1: 5, value2: 1, turns: 3, targets: 30, modifiers: 0, type: 3 } ], cost: 5, area: 4, cooldown: 4, los: true, team_cooldown: false, initial_cooldown: 0, template: 65, type: 3 },
  '102': { id: 102, name: 'ferocity', level: 107, min_range: 1, max_range: 8, launch_type: 7, effects: [ { id: 3, value1: 50, value2: 10, turns: 2, targets: 22, modifiers: 0, type: 5 } ], cost: 5, area: 1, cooldown: 1, los: true, team_cooldown: false, initial_cooldown: 0, template: 66, type: 5 },
  '103': { id: 103, name: 'collar', level: 182, min_range: 1, max_range: 6, launch_type: 7, effects: [ { id: 22, value1: 80, value2: 10, turns: 2, targets: 22, modifiers: 0, type: 5 } ], cost: 5, area: 1, cooldown: 1, los: true, team_cooldown: false, initial_cooldown: 0, template: 67, type: 5 },
  '104': { id: 104, name: 'bark', level: 234, min_range: 1, max_range: 6, launch_type: 7, effects: [ { id: 21, value1: 60, value2: 10, turns: 2, targets: 22, modifiers: 0, type: 5 } ], cost: 5, area: 1, cooldown: 1, los: true, team_cooldown: false, initial_cooldown: 0, template: 68, type: 5 },
  '105': { id: 105, name: 'burning', level: 209, min_range: 4, max_range: 6, launch_type: 7, effects: [ { id: 1, value1: 78, value2: 9, turns: 0, targets: 17, modifiers: 0, type: 1 }, { id: 13, value1: 78, value2: 9, turns: 1, targets: 17, modifiers: 1, type: 6 }, { id: 16, value1: 0, value2: 0, turns: 0, targets: 22, modifiers: 0, type: 1 } ], cost: 5, area: 5, cooldown: 4, los: true, team_cooldown: false, initial_cooldown: 0, template: 69, type: 1 },
  '106': { id: 106, name: 'fracture', level: 240, min_range: 1, max_range: 6, launch_type: 7, effects: [ { id: 19, value1: 20, value2: 5, turns: 2, targets: 31, modifiers: 1, type: 7 } ], cost: 4, area: 1, cooldown: 1, los: true, team_cooldown: false, initial_cooldown: 0, template: 59, type: 7 },
  '110': { id: 110, name: 'antidote', level: 114, min_range: 0, max_range: 4, launch_type: 7, effects: [ { id: 23, value1: 0, value2: 0, turns: 0, targets: 30, modifiers: 0, type: 9 } ], cost: 3, area: 1, cooldown: 4, los: true, team_cooldown: false, initial_cooldown: 0, template: 70, type: 9 },
  '114': { id: 114, name: 'punishment', level: 147, min_range: 1, max_range: 1, launch_type: 7, effects: [ { id: 28, value1: 25, value2: 0, turns: 0, targets: 31, modifiers: 0, type: 1 }, { id: 28, value1: 75, value2: 0, turns: 0, targets: 31, modifiers: 4, type: 1 } ], cost: 5, area: 1, cooldown: 3, los: true, team_cooldown: false, initial_cooldown: 0, template: 71, type: 1 },
  '120': { id: 120, name: 'covetousness', level: 139, min_range: 0, max_range: 8, launch_type: 7, effects: [ { id: 32, value1: 1, value2: 0, turns: 2, targets: 29, modifiers: 6, type: 5 } ], cost: 2, area: 9, cooldown: 2, los: true, team_cooldown: false, initial_cooldown: 0, template: 72, type: 5 },
  '121': { id: 121, name: 'vampirization', level: 177, min_range: 0, max_range: 8, launch_type: 7, effects: [ { id: 2, value1: 42, value2: 2, turns: 0, targets: 29, modifiers: 6, type: 2 } ], cost: 6, area: 7, cooldown: 1, los: true, team_cooldown: false, initial_cooldown: 0, template: 73, type: 2 },
  '122': { id: 122, name: 'precipitation', level: 192, min_range: 0, max_range: 8, launch_type: 7, effects: [ { id: 31, value1: 1, value2: 0, turns: 2, targets: 29, modifiers: 6, type: 5 } ], cost: 3, area: 9, cooldown: 2, los: true, team_cooldown: false, initial_cooldown: 0, template: 74, type: 5 },
  '141': { id: 141, name: 'alteration', level: 53, min_range: 6, max_range: 12, launch_type: 7, effects: [ { id: 30, value1: 18, value2: 2, turns: 0, targets: 31, modifiers: 0, type: 1 } ], cost: 3, area: 1, cooldown: 1, los: true, team_cooldown: false, initial_cooldown: 0, template: 75, type: 1 },
  '142': { id: 142, name: 'wizard_bulb', level: 215, min_range: 1, max_range: 3, launch_type: 7, effects: [ { id: 14, value1: 8, value2: 0, turns: 0, targets: 31, modifiers: 0, type: 8 } ], cost: 15, area: 1, cooldown: 7, los: true, team_cooldown: true, initial_cooldown: 0, template: 77, type: 8 },
  '143': { id: 143, name: 'plasma', level: 290, min_range: 0, max_range: 6, launch_type: 7, effects: [ { id: 1, value1: 35, value2: 2, turns: 0, targets: 31, modifiers: 2, type: 1 } ], cost: 9, area: 6, cooldown: 3, los: true, team_cooldown: false, initial_cooldown: 0, template: 76, type: 1 },
  '144': { id: 144, name: 'jump', level: 70, min_range: 1, max_range: 3, launch_type: 7, effects: [ { id: 10, value1: 0, value2: 0, turns: 0, targets: 31, modifiers: 0, type: 9 }, { id: 41, value1: 100, value2: 0, turns: 2, targets: 31, modifiers: 4, type: 5 } ], cost: 4, area: 1, cooldown: 3, los: false, team_cooldown: false, initial_cooldown: 0, template: 78, type: 9 },
  '152': { id: 152, name: 'covid', level: 220, min_range: 0, max_range: 2, launch_type: 7, effects: [ { id: 43, value1: 2, value2: 0, turns: 0, targets: 31, modifiers: 8, type: 6 }, { id: 13, value1: 69, value2: 10, turns: 7, targets: 31, modifiers: 8, type: 6 } ], cost: 8, area: 1, cooldown: 7, los: true, team_cooldown: false, initial_cooldown: 0, template: 79, type: 6 },
  '154': { id: 154, name: 'elevation', level: 228, min_range: 0, max_range: 5, launch_type: 7, effects: [ { id: 12, value1: 80, value2: 0, turns: 0, targets: 31, modifiers: 0, type: 2 } ], cost: 6, area: 1, cooldown: -1, los: true, team_cooldown: false, initial_cooldown: 0, template: 80, type: 2 },
  '155': { id: 155, name: 'knowledge', level: 32, min_range: 0, max_range: 7, launch_type: 7, effects: [ { id: 44, value1: 150, value2: 20, turns: 2, targets: 31, modifiers: 0, type: 5 } ], cost: 5, area: 1, cooldown: 4, los: true, team_cooldown: false, initial_cooldown: 0, template: 81, type: 5 },
  '156': { id: 156, name: 'wizardry', level: 166, min_range: 0, max_range: 6, launch_type: 7, effects: [ { id: 39, value1: 150, value2: 20, turns: 2, targets: 31, modifiers: 0, type: 5 } ], cost: 6, area: 1, cooldown: 4, los: true, team_cooldown: false, initial_cooldown: 0, template: 82, type: 5 },
  '157': { id: 157, name: 'repotting', level: 163, min_range: 1, max_range: 14, launch_type: 7, effects: [ { id: 11, value1: 0, value2: 0, turns: 0, targets: 22, modifiers: 0, type: 9 }, { id: 1, value1: 18, value2: 2, turns: 0, targets: 22, modifiers: 0, type: 1 } ], cost: 4, area: 1, cooldown: 2, los: false, team_cooldown: false, initial_cooldown: 0, template: 83, type: 9 },
  '158': { id: 158, name: 'therapy', level: 260, min_range: 1, max_range: 5, launch_type: 7, effects: [ { id: 2, value1: 75, value2: 5, turns: 0, targets: 31, modifiers: 0, type: 2 } ], cost: 7, area: 6, cooldown: 2, los: true, team_cooldown: false, initial_cooldown: 0, template: 84, type: 2 },
  '159': { id: 159, name: 'mutation', level: 83, min_range: 0, max_range: 8, launch_type: 7, effects: [ { id: 45, value1: 20, value2: 5, turns: 0, targets: 31, modifiers: 0, type: 2 } ], cost: 7, area: 12, cooldown: 4, los: true, team_cooldown: false, initial_cooldown: 0, template: 85, type: 2 },
  '160': { id: 160, name: 'desintegration', level: 223, min_range: 1, max_range: 6, launch_type: 1, effects: [ { id: 30, value1: 70, value2: 10, turns: 0, targets: 31, modifiers: 0, type: 1 } ], cost: 8, area: 11, cooldown: 2, los: true, team_cooldown: false, initial_cooldown: 0, template: 86, type: 1 },
  '161': { id: 161, name: 'transmutation', level: 252, min_range: 1, max_range: 6, launch_type: 1, effects: [ { id: 45, value1: 55, value2: 4, turns: 0, targets: 31, modifiers: 0, type: 2 } ], cost: 8, area: 11, cooldown: 9, los: true, team_cooldown: false, initial_cooldown: 0, template: 87, type: 2 },
  '162': { id: 162, name: 'grapple', level: 120, min_range: 1, max_range: 8, launch_type: 1, effects: [ { id: 46, value1: 0, value2: 0, turns: 0, targets: 31, modifiers: 0, type: 9 } ], cost: 3, area: 13, cooldown: 0, los: true, team_cooldown: false, initial_cooldown: 0, template: 88, type: 9 },
  '163': { id: 163, name: 'boxing_glove', level: 140, min_range: 2, max_range: 8, launch_type: 1, effects: [ { id: 51, value1: 0, value2: 0, turns: 0, targets: 31, modifiers: 0, type: 9 } ], cost: 3, area: 13, cooldown: 0, los: true, team_cooldown: false, initial_cooldown: 0, template: 89, type: 9 },
  '166': { id: 166, name: 'tactician_bulb', level: 270, min_range: 3, max_range: 3, launch_type: 7, effects: [ { id: 14, value1: 11, value2: 0, turns: 0, targets: 31, modifiers: 0, type: 8 } ], cost: 16, area: 1, cooldown: 7, los: true, team_cooldown: true, initial_cooldown: 0, template: 92, type: 8 },
  '167': { id: 167, name: 'savant_bulb', level: 250, min_range: 1, max_range: 4, launch_type: 7, effects: [ { id: 14, value1: 12, value2: 0, turns: 0, targets: 31, modifiers: 0, type: 8 } ], cost: 16, area: 1, cooldown: 7, los: true, team_cooldown: true, initial_cooldown: 0, template: 93, type: 8 },
  '168': { id: 168, name: 'serum', level: 199, min_range: 0, max_range: 6, launch_type: 1, effects: [ { id: 2, value1: 50, value2: 5, turns: 4, targets: 30, modifiers: 0, type: 2 } ], cost: 8, area: 11, cooldown: 4, los: true, team_cooldown: false, initial_cooldown: 0, template: 94, type: 2 },
  '169': { id: 169, name: 'crushing', level: 158, min_range: 1, max_range: 8, launch_type: 3, effects: [ { id: 47, value1: 45, value2: 4, turns: 2, targets: 31, modifiers: 1, type: 7 } ], cost: 6, area: 1, cooldown: 2, los: true, team_cooldown: false, initial_cooldown: 0, template: 95, type: 7 },
  '170': { id: 170, name: 'brainwashing', level: 266, min_range: 1, max_range: 8, launch_type: 3, effects: [ { id: 48, value1: 32, value2: 7, turns: 2, targets: 31, modifiers: 1, type: 7 } ], cost: 6, area: 1, cooldown: 1, los: true, team_cooldown: false, initial_cooldown: 0, template: 96, type: 7 },
  '171': { id: 171, name: 'arsenic', level: 285, min_range: 3, max_range: 4, launch_type: 7, effects: [ { id: 13, value1: 62, value2: 5, turns: 2, targets: 31, modifiers: 1, type: 6 } ], cost: 8, area: 1, cooldown: 2, los: false, team_cooldown: false, initial_cooldown: 0, template: 97, type: 6 },
  '172': { id: 172, name: 'bramble', level: 278, min_range: 0, max_range: 7, launch_type: 7, effects: [ { id: 20, value1: 25, value2: 0, turns: 1, targets: 31, modifiers: 0, type: 3 } ], cost: 4, area: 1, cooldown: 8, los: true, team_cooldown: false, initial_cooldown: 0, template: 98, type: 3 },
  '173': { id: 173, name: 'dome', level: 243, min_range: 0, max_range: 0, launch_type: 7, effects: [ { id: 5, value1: 12, value2: 2, turns: 4, targets: 26, modifiers: 0, type: 4 } ], cost: 9, area: 5, cooldown: 8, los: true, team_cooldown: false, initial_cooldown: 0, template: 99, type: 4 },
  '174': { id: 174, name: 'manumission', level: 149, min_range: 0, max_range: 5, launch_type: 1, effects: [ { id: 49, value1: 0, value2: 0, turns: 0, targets: 31, modifiers: 0, type: 9 } ], cost: 5, area: 1, cooldown: 5, los: true, team_cooldown: false, initial_cooldown: 0, template: 100, type: 9 },
  '276': { id: 276, name: 'prism', level: 92, min_range: 0, max_range: 6, launch_type: 4, effects: [ { id: 38, value1: 60, value2: 0, turns: 2, targets: 31, modifiers: 0, type: 5 }, { id: 44, value1: 60, value2: 0, turns: 2, targets: 31, modifiers: 0, type: 5 }, { id: 41, value1: 60, value2: 0, turns: 2, targets: 31, modifiers: 0, type: 5 }, { id: 42, value1: 60, value2: 0, turns: 2, targets: 31, modifiers: 0, type: 5 }, { id: 40, value1: 60, value2: 0, turns: 2, targets: 31, modifiers: 0, type: 5 }, { id: 39, value1: 60, value2: 0, turns: 2, targets: 31, modifiers: 0, type: 5 } ], cost: 6, area: 1, cooldown: 6, los: true, team_cooldown: false, initial_cooldown: 0, template: 104, type: 5 }
})
export { CHIPS }