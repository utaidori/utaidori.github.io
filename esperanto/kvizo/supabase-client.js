// 1. Supabaseの設定
const SUPABASE_URL = "https://imbusfzdlzmyqygbzoqx.supabase.co";
const SUPABASE_ANON_KEY = "sb_publishable_aFOVrfF4O5d74j8l85upwQ_Y17TnGzg"; 

// 2. クライアントの初期化
const _supabase = supabase.createClient(SUPABASE_URL, SUPABASE_ANON_KEY);

/**
 * データベースから問題を条件指定して一括取得する共通関数
 * @param {string} type - 'fremda' または 'difino'
 * @param {string} level - 'c1' などのレベル
 */
async function fetchQuestions(type, level) {
  // 'questions' テーブルからデータをフィルタリングして取得
  const { data, error } = await _supabase
    .from('questions')
    .select('cat, word, choices, explanation') // 必要なカラムだけ指定
    .eq('type', type)
    .eq('level', level);

  if (error) {
    console.error("Supabaseからのデータ取得に失敗しました:", error);
    return [];
  }

  return data;
}
